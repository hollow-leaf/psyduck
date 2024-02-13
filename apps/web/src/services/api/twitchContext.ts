import axios from 'axios'

export class TwitchContextService {
    private apiUrl_channelInfo: string = process.env.API_CHANNELINFO!
    private apiUrl_oauth: string = process.env.API_OAUTH!
    private client_id: string = process.env.CLIENT_ID!
    private client_secret: string = process.env.CLIENT_SECRET!
    private session_secret: string = process.env.SESSION_SECRET!
    
    public async getChannelInfo (broadcasterId: string) {
        try {
            const access_token: string = await this.getAccessToken()
            const response = await axios.get(`${this.apiUrl_channelInfo}`, {
                params: {
                    broadcaster_id: broadcasterId
                },
                headers: {
                    'Authorization': `Bear ${access_token}`,
                    'Client-Id': this.client_id
                }
            })
            return response.data
        } catch (error) {
            console.error(error)
            return null
        }
    }

    public async getAccessToken () {
        try {
            console.log(this.apiUrl_oauth, this.client_id, this.client_secret)
            const response = await axios.post(
                this.apiUrl_oauth,{
                    params: {
                        client_id: this.client_id,
                        client_secret: this.client_secret,
                        grant_type: 'client_credentials',
                    },
                }
            )
            return response.data.access_token
        }catch (error){
            console.error(error)
            return null
        }
    }
}
