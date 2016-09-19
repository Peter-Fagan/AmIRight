# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all

u1 = User.create! :email => 'john@gmail.com', :password => 'chicken', :password_confirmation => 'chicken'
u2 = User.create! :email => 'badger@ga.co', :password => 'chicken', :password_confirmation => 'chicken'

p User.all

Question.destroy_all

q1 = Question.create :content => "Is this a question?"
q2 = Question.create :content => "Do i really care?....really?"

u1.questions << q1
u1.questions << q2

Answer.destroy_all

a1 = Answer.create :content => "Yes"
a2 = Answer.create :content => "No"
a3 = Answer.create :content => "nope"
a4 = Answer.create :content => "not a chance"

q1.answers << a1 << a2
q2.answers << a3 << a4

p u1.questions
p q1.answers
p u1.q2.answers
