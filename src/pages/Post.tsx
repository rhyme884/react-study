import React from 'react';
import { RouteComponentProps } from 'react-router';

interface Params {
    id?: string;
}
const Post: React.FC<RouteComponentProps<Params>> = ({ match }) => {
    return (
        <div>
            포스트 {match.params.id}
        </div>
    )
}

export default Post;