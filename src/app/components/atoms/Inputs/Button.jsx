import * as React from 'react';

export default function Button({children, ...props}) {

    return (
        <button className="px-4 py-2 border hover:bg-secondary" {...props}>
            {children}
        </button>
    );
}
