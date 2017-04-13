
import React from 'react'

class SecondFactorLink extends React.Component {
  render() {
    return (
      <div>
        <a href={this.props.info.link}><h3>{this.props.info.type}</h3></a>
        <p>{this.props.info.description}</p>
      </div>
    ) 
  }
}

SecondFactorLink.propTypes = {
  info: React.PropTypes.object.isRequired
}


class SecondFactorPicker extends React.Component {
  render() {
    return (
      <div>
        <h1>Second Factor Authentication Required</h1>
        <p>Please select one of the following factors:</p>
        <div hidden={!this.props.u2f}><SecondFactorLink info={SecondFactorPicker.u2fInfo} /></div>
        <div hidden={!this.props.totp}><SecondFactorLink info={SecondFactorPicker.totpInfo} /></div>
        <div hidden={!this.props.backup}><SecondFactorLink info={SecondFactorPicker.backupInfo} /></div>
      </div>
    ) 
  }
}

SecondFactorPicker.propTypes = {
  u2f: React.PropTypes.bool.isRequired,
  totp: React.PropTypes.bool.isRequired,
  backup: React.PropTypes.bool.isRequired,
}

SecondFactorPicker.u2fInfo = {
  type: "Universal Second Factor (U2F/FIDO)",
  description: "Authenticate using a U2F (or FIDO) Token such as a Yubikey",
  link: "#/2fa-u2f-authorize",
}
SecondFactorPicker.totpInfo = {
  type: "Time based One Time Pad (TOTP)",
  description: "Authenticate using a TOTP application such as Google Authenticator",
  link: "#/2fa-totp-authorize",
}

SecondFactorPicker.backupInfo = {
  type: "Backup Code",
  description: "Authenticate using an offline backup code",
  link: "#/2fa-backup-authorize",
}

export {SecondFactorPicker, SecondFactorLink}