// NotificationContext.tsx
import React from 'react';

// Declaring the state object globally.
const initialNotificationState = {
  showNotificationBell: false,
};

const notificationContextWrapper = (component?: React.Component) => ({
  ...initialNotificationState,
  show: () => {
    console.debug('show');
    if (!initialNotificationState.showNotificationBell) {
      initialNotificationState.showNotificationBell = true;
    }
    component?.setState({context: notificationContextWrapper(component)});
  },
  hide: () => {
    console.debug('hide');
    if (initialNotificationState.showNotificationBell) {
      initialNotificationState.showNotificationBell = false;
    }
    component?.setState({context: notificationContextWrapper(component)});
  },
});

type Context = ReturnType<typeof notificationContextWrapper>;

export const NotificationContext = React.createContext<Context>(
  notificationContextWrapper(),
);

interface State {
  context: Context;
}

export class NotificationContextProvider extends React.Component {
  state: State = {
    context: notificationContextWrapper(this),
  };

  render() {
    return (
      <NotificationContext.Provider value={this.state.context}>
        {this.props.children}
      </NotificationContext.Provider>
    );
  }
}
