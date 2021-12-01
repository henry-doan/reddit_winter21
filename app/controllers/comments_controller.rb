class CommentsController < ApplicationController
  before_action :set_topic
  # Model name - comment
  # parent - topic
  def index
    # @comments = Comment.all
    @comments = @topic.comments
    render component: 'Comments', props: { topic: @topic, comments: @comments }
  end

  def show
    @comment = @topic.comments.find(params[:id])
    render component: 'Comment', props: { topic: @topic, comment: @comment }
  end

  def new
  end

  def create

  end

  def edit
  end

  def update

  end

  def destroy

  end

  private 
    def set_topic
      @topic = Topic.find(params[:topic_id])
    end
end
