const gitHubAPI = {
    License: (license) => {
        const licenseURl = `https://api.github.com/licenses/${licenses}`;
        console.log(license);
        if (license === "None"){
            return;
        }
    }
}


Data: (username) => {
    const queryUrl = `https://api.github.com/users/${username}/events/public`;
    return 
      .get(queryUrl)
      .then(function (res) {
          // shows github username's profile avatar, if they have one //
          const { avatar } = res.data[0].actor;
          const [ email ] = res.data[0].payload.commits[0].author;

          return {
              avatar,
              email,
          };
      })
      .catch(function, (err) {
          console.log(err);
      });
    }
}

module.exports = gitHubAPI;