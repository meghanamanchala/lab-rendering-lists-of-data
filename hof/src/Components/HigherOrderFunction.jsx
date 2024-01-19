import { Component } from "react";
export default class HigherOrderFunction extends Component{
    constructor(){
        super();
        this.state = {
            userData: [
                { id: '1', name: 'Joe', user_type: 'Developer', age:31, years:11 },
                { id: '2', name: 'Hill', user_type: 'Designer', age:26, years:4 },
                { id: '3', name: 'John', user_type: 'Teacher', age:24, years: 2},
                { id: '4', name: 'Sam', user_type: 'Entreprenuer', age:58,years:25},
                { id: '5', name: 'Jack', user_type: 'Designer', age:43, years: 18}

            ]
        }
    }
    //p2
    renderItems = () => {
        const data = this.state.userData;
        const mapRows = data.map((item) => (
         
            <div key={item.id}>
                <li className="list-elements">
                    
                    <span>Id: {item.id}</span>
                    <span>Name : {item.name}</span>
                    <span>User Type: {item.user_type}</span>
               </li>
            </div>
        ));
        return mapRows;
    };

    //p3

    renderFilterdData=()=>{
        const data=this.state.userData;
    
        const filtedUserData=data
        .filter((el)=>{
            return el.user_type==="Designer";
        })
        const mapRow=filtedUserData.map((item)=>{
            return(
                <div key={item.id}>
                    <li className="list-elements">
                    <span>Id: {item.id}</span>
                    <span>Name : {item.name}</span>
                    <span>User Type: {item.user_type}</span> 
                    </li>
                </div>
            );
        });
      return mapRow;
   
    } 
    

    //p4
    renderUserWithJ = () =>{
        const data = this.state.userData;
        
        let filteredDataWithJ = data.filter((item) =>
        item.name.startsWith("J")
        );

        return filteredDataWithJ.map((item)=>(
            <div key={item.id}>
            <li className="list-elements">
                
                <span>Id: {item.id}</span>
                <span>Name : {item.name}</span>
                <span>User Type: {item.user_type}</span>
           </li>
        </div>
        ));
    }
    //p5
    renderByAge = ()=>{
        const data = this .state.userData;
        return data
        .filter((item) => item.age > 28 && item.age <=50)
        .map((item)=>(
            <div key={item.id}>
            <li className="list-elements"> 
                <span>Id: {item.id}</span>
                <span>Name : {item.name}</span>
                <span>User Type: {item.user_type}</span>
           </li>
        </div>

        ));     
    }


    //p6
    renderTotalYear = () => {
        const data = this.state.userData;

        let filteredData = data.filter((item) => item.user_type == "Designer");
        
        let totalYears = filteredData.reduce(
            (acc, curr) => acc.years + curr.years
        );
        return totalYears;
    };
   
    render(){
        return (
            <>
             <div>
            <h2>Display all items</h2>
            <div className="display-box">
            <ul>{this.renderItems()} </ul>
            </div>
          </div>
          <div>
            <h2>Display based on user type</h2>
            <div className="display-box">
            <ul>{this.renderFilterdData()} </ul>
            </div>
          </div>
          <div>
            <h2>Filter all data starting with j</h2>
            <div className="display-box">
            <ul>{this.renderUserWithJ()} </ul>
            </div>
          </div>
          <div>
            <h2>Filter all data based on age graeter than 28 and less than equal to 50 </h2>
            <div className="display-box">
            <ul>{this.renderByAge()} </ul>
            </div>
          </div>
          <div>
            <h2>Filter the total years of designer</h2>
            <div className="display-box">
            <ul>{this.renderTotalYear()} </ul>
            </div>
          </div>
            </>
        );
    }

}