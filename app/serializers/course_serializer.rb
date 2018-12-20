class CourseSerializer < ActiveModel::Serializer
	attributes :id, :name, :time_spent, :completed, :date, :student_id
	# has_many :course_students
  # has_many :students, through: :course_students
  # has_many :comments, dependent: :destroy
  # belongs_to :student
end
