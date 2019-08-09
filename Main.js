import React, {Component} from 'react';
import { Profile } from './Profile';
import nba from 'nba';
import { DataViewContainer } from "./DataViewContainer"
import SearchBar from "./SearchBar"
import { DEFAULT_PLAYER_INFO } from '../constants';

export class Main extends Component {
    state = {
        playerInfo: DEFAULT_PLAYER_INFO,
    }

    componentDidMount() {
        // nba.stats.playerInfo({ PlayerID: this.state.playerId }) // 通过id获取信息
        //     .then((info) => { // promise
        //         const playerInfo = Object.assign(info.commonPlayerInfo[0], info.playerHeadlineStats[0]); // 提取信息，合并
        //         console.log('playerInfo', playerInfo);
        //         this.setState({ playerInfo }); // state赋值
        //     })
        //     .catch((e) => console.log(e))
        this.loadPlayerInfo(this.state.playerInfo.fullName);
    }

    render() { // 想profile传入信息
        console.log(this.state.playerInfo.playerId);
        return (
            <div className="main">
                <SearchBar handleSelectPlayer={this.handleSelectPlayer}/>
                <div className={"player"}>
                    <Profile playerInfo={this.state.playerInfo} />
                    {/*<ShotChart playerId={this.state.playerId} />*/}
                    <DataViewContainer playerId={this.state.playerInfo.playerId}/>
                </div>
            </div>
        );
    }

    handleSelectPlayer = (playerName) => {
        this.loadPlayerInfo(playerName);
    }
    loadPlayerInfo = (playerName) => {
        nba.stats.playerInfo({ PlayerID: nba.findPlayer(playerName).playerId }).then((info) => {
            const playerInfo = Object.assign(info.commonPlayerInfo[0], info.playerHeadlineStats[0]);
            this.setState({ playerInfo });
        }); // 设置state
    }
}

export default Main;