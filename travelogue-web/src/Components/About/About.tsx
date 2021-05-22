import React from 'react';

interface IProps {
  name: string;
}

export const About = (props: IProps) => {
    return <h1>{props.name}</h1>;
};
