import * as React from 'react'
import * as styles from "./Hello.styles"

interface IProps {
   compiler: string,
   framework: string,
   bundler: string
}

export class Hello extends React.PureComponent<IProps, { showInstallMessage: boolean }> {
    constructor(props: IProps) {
        super(props)

        this.state = {
            showInstallMessage: false 
        }
    }
    componentDidMount() {
        const isIos = () => {
            return /iphone|ipad|ipod/.test(
                window.navigator.userAgent.toLowerCase()
            );
        }
          // Detects if device is in standalone mode
        const isInStandaloneMode = () => ('standalone' in window.navigator) && ((window.navigator as any).standalone);
          
          // Checks if should display install popup notification:
        if (isIos() && !isInStandaloneMode()) {
            this.setState({ showInstallMessage: true });
        }
    }
    
    render() {
        const { showInstallMessage } = this.state

        return <React.Fragment>
            <h1 className={styles.hello}>
                This is Tracktor! A {this.props.framework} 
                application using {this.props.compiler} 
                with {this.props.bundler}
            </h1>
            <div>
            { 
                showInstallMessage && 
                <div>
                    You can add that app to your homescreen
                </div>
            }
            </div>
            <footer>
                <div>Tractor icon made by <a href="http://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>
            </footer>
        </React.Fragment>
    }
}