import React from 'react';
import { RouteComponentProps } from 'react-router';
import queryString from 'query-string';

interface Params {
    name?: string;
}

const About: React.FC<RouteComponentProps<Params>> = ({location, match}) => {
    const query = queryString.parse(location.search);
    let detail = query.detail === 'true';

    return (
        <div>
            <h2>About {match.params.name}</h2>
            {detail && 'detail: blahblahblah'}
        </div>
    )
}

export default About;