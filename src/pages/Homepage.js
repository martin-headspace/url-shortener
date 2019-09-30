import React from 'react'
import { List, ListItem, Divider } from "react95"

class App extends React.Component {
    state = {

    }
    render() {
        return (
            <List>
                <ListItem>🎤 Sing</ListItem>
                <ListItem>💃🏻 Dance</ListItem>
                <Divider />
                <ListItem disabled>😴 Sleep</ListItem>
            </List>
        )
    }
}

export default App