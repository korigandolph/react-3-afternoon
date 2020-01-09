import React, {Component} from 'react';
import data from './data';

class Body extends Component{
    constructor(){
        super()
        this.state={
           datas: data,
           index: 0    
        }
        this.handlePrev= this.handlePrev.bind(this)
        this.handleNext=this.handleNext.bind(this)
    }

    handlePrev(){
        if(this.state.index<1){
            return this.state.index=25}

            else this.setState({index: this.state.index-1})
    }
    handleNext(){
        if(this.state.index>23){
            return this.setState.index=1}
    
        else this.setState ({index: this.state.index+1})
    }

    render(){
        return(
            <div className='body'> 
                <div className='black'></div>
                <div className='text'>
                    <p className='id'>{this.state.datas[this.state.index].id}/25</p>
                    <p className='name'>{this.state.datas[this.state.index].name.first} {' '} {this.state.datas[this.state.index].name.last}</p>
                    <p><span className='from'>From:</span> {this.state.datas[this.state.index].city}, {' '}{this.state.datas[this.state.index].country}</p>
                    <p><span className='title'>Job Title:</span> {this.state.datas[this.state.index].title}</p>
                    <p><span className='employer'>Employer:</span> {this.state.datas[this.state.index].employer}</p>
                    <p><span className='movie'>Favorite Movies:</span> <ol> {this.state.datas[this.state.index].favoriteMovies.map((elem, ind)=>(
                     <li className='list-items' key={ind}> {elem} </li> ))} </ol></p>
                </div>
                <div className='buttons'>
                    <button className='previous' onClick={(e)=>{this.handlePrev(e)}}>{'<'}Previous</button>
                 <button className='next' onClick={(e)=>{this.handleNext(e)}}>Next {'>'}</button>
                </div>
            </div>
        )
    }
}

export default Body