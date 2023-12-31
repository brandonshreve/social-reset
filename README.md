# social-reset

![alt text](/grass.jpg)

Quick and dirty scripts to reset your social media prescence (e.g. Musked Twitter). This does not use the Twitter API directly, but instead uses DOM manipulation to click buttons and delete tweets.

**Warning:** This is a destructive script. It will delete data off your accounts. You may encounter rate limiting or temporary account bans. Use at your own risk. 

| File | Description | URL |
| --- | --- | --- |
| `unfollow-everyone.js` | Unfollows everyone from your Twitter account. | https://twitter.com/{your_username}/following |
| `unlike-everything.js` | Unlikes all tweets from your Twitter account. | https://twitter.com/{your_username}/likes |

## How to use
Go to the Twitter page for your profile that corresponds to the script being used (E.g. [likes](https://twitter.com/BrandonShreve/likes), [following](https://twitter.com/BrandonShreve/following). Copy/paste the contents of the .js files into your browser console. Let the script run in the background. 

Note: You will likely run into rate limiting. If you do, wait a few minutes and try again.