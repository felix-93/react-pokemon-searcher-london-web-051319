import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {
  state = {
    front: true
  }

  render() {
    const frontImage = this.props.sprites.front
    const backImage = this.props.sprites.back
    const name = this.props.name
    const hp = this.props.stats.find(stat => stat.name === "hp").value
    return (
      <Card>
        <div>
          <div className="image">
             <img alt="oh no!"  onClick={() => this.setState({front: !this.state.front})}src={this.state.front ? frontImage : backImage}/>
          </div>
          <div className="content">
            <div className="header"> {name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {hp}
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
