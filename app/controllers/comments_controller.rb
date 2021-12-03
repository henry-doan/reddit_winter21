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
    @comment = @topic.comments.new
    render component: 'CommentNew', props: { topic: @topic, comment: @comment }
  end

  def create
    @comment = @topic.comments.new(comment_params)
    if @comment.save
      redirect_to topic_comments_path(@topic)
    else
      render component: 'CommentNew', props: { topic: @topic, comment: @comment }
    end
  end

  def edit
    @comment = @topic.comments.find(params[:id])
    render component: 'CommentEdit', props: { topic: @topic, comment: @comment }
  end

  def update
    @comment = @topic.comments.find(params[:id])
    if @comment.update(comment_params)
      redirect_to topic_comments_path(@topic)
    else
      render component: 'CommentEdit', props: { topic: @topic, comment: @comment }
    end
  end

  def destroy
    @comment = @topic.comments.find(params[:id])
    @comment.destroy
    redirect_to topic_comments_path(@topic)
  end

  private 
    def comment_params
      params.require(:comment).permit(:author, :body)
    end

    def set_topic
      @topic = Topic.find(params[:topic_id])
    end
end
