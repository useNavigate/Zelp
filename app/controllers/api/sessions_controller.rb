class Api::SessionsController < ApplicationController
  def show
    # banana
    # if there is a current_user: render current_user as JSON, under a top-level key of user
    # if there is not a current_user: render { user: nil } as JSON
    if current_user
      @user = current_user
      render "api/users/profile"
    else
      render json: { user: nil }
    end
  end

  def create

    #  pass the credentials from the request body, stored under top level keys of credential and password, to User::find_by_credentials; save the result to @user
    # if a user with matching credentials was found (i.e., @user is truthy):
    # login @user
    # render @user as JSON, under a top-level key of user
    # if no user was found (i.e., @user is falsey):
    # render { errors: ['The provided credentials were invalid.'] } as JSON, with a status of :unauthorized
    credential = params[:credential]
    password = params[:password]
    @user = User.find_by_credentials(credential, password)
    if @user
      login!(@user)
      # render "api/users/show"
      render "api/users/profile"
    end
    # else
    #   render json: { errors: ["The provided credentials were invalid."] }, status: 422
    # end
  end

  # log out the current_user, if one exists
  # render { message: 'success' } as JSON
  def destroy
    # if @user <= this was the issue
    if current_user
      logout!
      render json: { message: "success" }
    end
  end
end
