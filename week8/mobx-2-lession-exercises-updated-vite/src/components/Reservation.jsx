import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'

class Reservation extends Component {

    seatReservation = () => {
        this.props.RestaurantStore.seatRes(this.props.res.id)
    }

    completeReservation = () => {
        this.props.RestaurantStore.completeRes(this.props.res.id)
    }

    render() {
        const res = this.props.res

        return (
            <div className={res.completed ? "conditional" : ""}>

                <div>
                    Name: {res.name}
                </div>

                <div>
                    Number of people: {res.numPeople}
                </div>

                <div>
                    Seated: {res.seated ? "Yes" : "No"}
                </div>

                <button onClick={this.seatReservation}>
                    Seat Reservation
                </button>

                <button onClick={this.completeReservation}>
                    Complete Reservation
                </button>

            </div>
        )
    }
}

export default inject("RestaurantStore")(observer(Reservation))