import React, { Component } from "react";
import "./style.css";

class CategoryList extends Component {

    _handleEventInput(event) {
        if(event.key === "Enter") {
            console.log("add category")
            this.props.createCategory(event.target.value)
        }
    }

    render() {
        return (
            <section className="category-list"> {}
                <ul className="category-list_enumerator">
                    {
                        this.props.categories.map((category, index) => {
                            return(
                                <li className="category-list_item">{category}</li>
                            );
                        })
                    }
                </ul>
                <input 
                    type="text" 
                    className="category-list_input" 
                    placeholder="add category" 
                    onKeyUp={this._handleEventInput.bind(this)}/>
            </section>
        );
    }
}

export default CategoryList;