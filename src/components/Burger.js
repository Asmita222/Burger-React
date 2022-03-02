import React, {Component} from "react";
import { act } from "react-dom/test-utils";
import './BurgerStyle.css';

export default class Burger extends Component{
 state = {
     lettuce: 0,
     tomato: 0,
     cheese: 0,
     meat: 0,
 }

 addRemoveIngerident = (action, ingerident) => {
    let {
        lettuce,
        tomato,
        cheese,
        meat
    } = this.state;

    let stateValue;

    switch(ingerident){
        case 'lettuce':{
            stateValue = lettuce;
            break;
        }
        case 'tomato':{
            stateValue = tomato;
            break;
        }
        case 'cheese':{
            stateValue = cheese;
            break;
        }
        case 'meat':{
            stateValue = meat;
            break;
        }
        default: break;
    }
    if(action === 'add'){
        stateValue = stateValue + 1;
    } else{
        stateValue = stateValue - 1;
    }
    this.setState({
        [ingerident]: stateValue >= 0 ? stateValue : 0
    });
}

burgerContent = () => {
    let{
        lettuce,
        tomato,
        cheese,
        meat
    } = this.state;

    let burger = [];
    //outputing the lettuce
    for(let i = 0; i < lettuce; i++){
        burger.push(<div key={burger.length} className="lettuceSide"></div>);
    }
    //outputing the tomato
    for(let i = 0; i < tomato; i++){
        burger.push(<div key={burger.length} className="tomatoSide"></div>);
    }
    //outputing the cheese
    for(let i = 0; i < cheese; i++){
        burger.push(<div key={burger.length} className="cheeseSide"></div>);
    }
    //outputing the meat
    for(let i = 0; i < meat; i++){
        burger.push(<div key={burger.length} className="meatSide"></div>);
    }
    return burger;

}

 render(){
     return(
         <>
          <div className="burgerIngeridents">
              <div className="topSide"></div>
              {this.burgerContent()}
              <div className="buttomSide"></div>
          </div>
          <div className="ingeridentsBlock">
              <p>Lettuce</p>
              <div className="ingerBtns">
              <button onClick={() => this.addRemoveIngerident('add', 'lettuce')} className="ingerBtn">Add</button>
              <button  onClick={() => this.addRemoveIngerident('remove', 'lettuce')}className="ingerBtn">Remove</button>
          </div>
          <p>Tomato</p>
              <div className="ingerBtns">
              <button onClick={() => this.addRemoveIngerident('add', 'tomato')} className="ingerBtn">Add</button>
              <button  onClick={() => this.addRemoveIngerident('remove', 'tomato')}className="ingerBtn">Remove</button>
          </div>
          <p>Cheese</p>
              <div className="ingerBtns">
              <button onClick={() => this.addRemoveIngerident('add','cheese')} className="ingerBtn">Add</button>
              <button  onClick={() => this.addRemoveIngerident('remove','cheese')}className="ingerBtn">Remove</button>
          </div>
          <p>Meat</p>
              <div className="ingerBtns">
              <button onClick={() => this.addRemoveIngerident('add','meat')} className="ingerBtn">Add</button>
              <button  onClick={() => this.addRemoveIngerident('remove','meat')}className="ingerBtn">Remove</button>
          </div>
               </div>
         </>
     );
 }
}
