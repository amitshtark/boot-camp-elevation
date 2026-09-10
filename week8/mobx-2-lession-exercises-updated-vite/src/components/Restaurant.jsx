import React, { Component } from 'react';
import { observer, inject } from 'mobx-react'
import Reservation from './Reservation';
import ResInput from './ResInput';

class Restaurant extends Component{

    addReservation = () => {
            const generalStore = this.props.GeneralStore

            this.props.RestaurantStore.addRes(generalStore.name, generalStore.numPeople)
    }


    render () {

        return (
            <div>
                <span>You have {this.props.RestaurantStore.openTables} open tables</span>
                <div>You have {this.props.RestaurantStore.restPopulation} people in the restaurant </div>
                <div id="completedTables">You have {this.props.RestaurantStore.completedTables} completed Tables </div>

                <ResInput/>
                <button id="addRes" onClick={this.addReservation}>Add Reservation</button>

                <div className = "reservations">
                {this.props.RestaurantStore.reservations.map((reservation) => (
                    <Reservation key={reservation.id} res={reservation}/>
                ))}
                </div>
            </div>
        )
    }
}

export default inject("GeneralStore", "RestaurantStore")(observer(Restaurant))