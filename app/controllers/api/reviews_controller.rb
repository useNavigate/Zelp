class Api::ReviewsController < ApplicationController
  #  api_reviews GET    /api/reviews(.:format)        api/reviews#index {:format=>:json}
  #                POST   /api/reviews(.:format)        api/reviews#create {:format=>:json}
  #     api_review GET    /api/reviews/:id(.:format)    api/reviews#show {:format=>:json}
  #                PATCH  /api/reviews/:id(.:format)    api/reviews#update {:format=>:json}
  #                PUT    /api/reviews/:id(.:format)    api/reviews#update {:format=>:json}
  #                DELETE /api/reviews/:id(.:format)    api/reviews#destroy {:format=>:json}

  # def index
  #   @reviews = Review.all
  #   render json: @reviews
  # end
  before_action :require_logged_in, only: [:create]
  wrap_parameters include: Review.attribute_names + [:images]

  def index
    @reviews = Review.includes(:user).all
    render :index
  end

  def create
    @review = Review.new
    @review.business_id = params[:review][:business_id]
    @review.user_id = params[:review][:user_id]
    @review.rating = params[:review][:rating]
    @review.body = params[:review][:body]
    if params[:review][:images].present?
      params[:review][:images].each do |image|
        @review.images.attach(io: image.tempfile, filename: image.original_filename)
      end
    end
    if @review.save
      @review.business.update_average_rating
      render :create
    else
      render json: @review.errors.full_messages, status: 422
    end
  end

  def show
    @review = Review.find(params[:id])
    render :show
  end

  def update
    @review = Review.find(params[:id])
    if params[:review][:images].present?
      params[:review][:images].each do |image|
        @review.images.attach(io: image.tempfile, filename: image.original_filename)
      end
    end
    if @review.update(review_params)
      @review.business.update_average_rating
      render json: @review
    end
  end

  def destroy
    @review = Review.find(params[:id])
    @business = Business.find(@review.business_id)
    @review.destroy
    @business.update_average_rating
    render "/api/businesses/show"
  end

  # def delete_image

  #   @review = Review.find(params[:id])
  #   @review.images.pop(params[:images])
  #   @review.save
  #   render json: @review
  # end

  # def delete_image
  #   @review = Review.find(params[:id])
  #   image_url = params[:images]
  #   if @review.images.attached?
  #     image_to_delete = @review.images.select { |image| image == image_url }.first
  #     image_to_delete&.purge
  #   else
  #     render json: { message: "Review has no images attached" }, status: :unprocessable_entity
  #   end
  # end
  def delete_image
    @review = Review.find(params[:id])
    index = params[:index].to_i
    if @review.images.attached? && @review.images.count > index
      @review.images[index].purge_later
    end
    @review.save
  end

  def latest
    @reviews = Review.includes(:user, :business).order(created_at: :desc).limit(8)
    render :latest
  end

  def review_params
    params.require(:review).permit(:business_id, :user_id, :rating, :body, :photo, :images, :index)
  end
end
