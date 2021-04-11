import React from 'react'
import { RouteComponentProps } from 'react-router';

interface IProps{
    name: string
}
interface IState {
    name: string
}

export default class About extends React.Component<IProps,IState> {
    constructor(props: IProps) {
        super(props)
    
        this.state = {
             name: this.props.name
        };
    }
    
    render(){
        alert(11);
        return <h1>{this.state.name}</h1>
    }
}
