import React from 'react';

var csrftoken = ('csrf_token');

const CSRFToken = () => {
    return (
        <input type="hidden" name="_csrf_token" value={csrftoken} />
    );
};
export default CSRFToken;