class Api::PostsController < ActionController::API
  wrap_parameters include: Post.attribute_names + [:images]

  def index
    @posts = Post.all.sort { |a, b| b.created_at <=> a.created_at }
  end

  def create
    post = Post.new(post_params)
    if post.save
      render partial: "api/posts/post", locals: { post: post }
    else
      render json: post.errors.full_messages, status: 422
    end
  end

  def show
    @post = Post.find(params[:id])
  end

  private

  def post_params
    params.require(:post).permit(:title, images: [])
  end
end
