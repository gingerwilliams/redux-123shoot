import Post from "../components/Post";
import { connect } from "react-redux";

const mapStateToProps = (state, ownProps) => {
    const board = state.boards.find(board => board.id === ownProps.boardId);
    const post = board.posts.find(post => post.id === ownProps.postId);

    return {
        post: post
    };
};

export default connect(mapStateToProps)(Post);
