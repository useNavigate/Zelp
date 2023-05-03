class Api::BusinessesController < ApplicationController
  def index
    @businesses = Business.all
    render :index
    # render json: @businesses
  end

  def show
    @business = Business.includes(:reviews).find(params[:id])
    render :show
  end

  def unreviewed
    @businesses = Business.where.not(id: current_user.reviews.pluck(:business_id)).order("RANDOM()").limit(6)
    render :unreviewed
  end

  #this took me WHOLE DAY
  def search
    query = params[:query].downcase
    category = params[:category]&.downcase
    search_term = "%#{query}%"
    @businesses = Business.includes(:reviews).where("LOWER(category) LIKE ? OR LOWER(name) LIKE ?", search_term, search_term)
    render :search
  end

  def business_params
    params.require(:business).permit(:id, :name, :city, :state, :zip_code, :phone_number, :price_range, :category, :five_stars, :four_stars, :three_stars, :two_starts, :one_star)
  end
end
