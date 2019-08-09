import React, {Component} from 'react';
import { Icon, Button, Input, AutoComplete } from 'antd';
import nba from 'nba'
import {PROFILE_PIC_URL_PREFIX} from '../constants'
const { Option } = AutoComplete;

class SearchBar extends Component {
    state = {
        dataSource: []
    }

    render() {
        const {dataSource} = this.state;
        // console.log(dataSource);
        const options = dataSource.map((player) => ( // 设置每一个条目，设置full name为unique key，获取图片
            <Option key={player.fullName} value={player.fullName}  className="player-option">
                <img className="player-option-image"  src={`${PROFILE_PIC_URL_PREFIX}/${player.playerId}.png`}/>
                <span className="player-option-label">{player.fullName}</span>
            </Option>
        ));
        return (
            <AutoComplete
                className="search-bar"
                size={"large"}
                dataSource={options}
                onSelect={this.onSelect}
                onSearch={this.handleSearch}
                placeholder="Search player"
                optionLabelProp="value"
            >
                <Input
                    suffix={
                        <Icon type="search" className="certain-category-icon"/>
                    }
                />
            </AutoComplete>
        );
    }

    onSelect = (name) => {
        // console.log(name);
        this.props.handleSelectPlayer(name);
    }
    handleSearch = (value) => {
        // console.log("handling search, got items");
        // console.log(value);
        //const players = nba.searchPlayers(value);
        //console.log(players);

        this.setState({
            dataSource: !value ? // 设置status，只有两项
                [] : nba.searchPlayers(value).map(player => ({
                    fullName: player.fullName,
                    playerId: player.playerId,
                }))
        });
    }
}
export default SearchBar;