class CoursesController < ApplicationController
  before_action :set_course, only: [:show, :edit, :update, :destroy]


	def myform
		render partial: 'courses/myform'
		# render 'myform', layout: false
	end

	def index
    current_user.admin ? @courses = Course.all.order('date DESC') : @courses = current_user.courses.order('date DESC')
    @student_total = current_user.courses.total_hours
    @student_incompleted = current_user.courses.total_incompleted
		@student_completed = current_user.courses.total_completed
		
		respond_to do |format|
			format.html { render :index }
			format.json { render json: @courses }
		end
  end
	
  def new
		@course = Course.new
		render :new, layout: false
  end
	
  def show
    @comments = @course.comments
    @comment = @course.comments.build
		respond_to do |format|
			format.html { render :index }
			format.json { render json: @course }
		end
  end

  def edit
  end

  def create
    @course = current_user.courses.create(course_params)
    if @course.save
      redirect_to @course
    else
      render :new
    end
  end

  def update
    if @course.update(course_params)
      redirect_to @course
    else
      render :edit
    end
  end

  def total_lessons
    @courses = current_user.courses
  end

  def destroy
    @course.destroy
    redirect_to courses_path
  end

  private

  def set_course
    @course = Course.find(params[:id])
  end

  def course_params
    params.require(:course).permit(
      :name,
      :time_spent,
      :completed,
      :date,
      :student_id
    )
  end
end
