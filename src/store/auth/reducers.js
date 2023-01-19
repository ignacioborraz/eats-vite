import { createReducer } from '@reduxjs/toolkit'
import authActions from './actions'

const { registrar_usuario,iniciar_sesion,iniciar_sesion_con_token,cerrar_sesion } = authActions

const initialState = {
    messages: [],
    token: "",
    mail: "",
    photo: "",
    is_admin: false,
    is_author: false,
    is_company: false,
    is_online: false
}

const authReducer = createReducer(initialState,
    (builder) => {
        builder
        .addCase(registrar_usuario.fulfilled, (state, action) => {
            const { success,response } = action.payload
            //console.log(action.payload)
            let newState = {}
            if (success) {
                newState = {
                    ...state,
                    messages: response
                }
            } else {
                if (typeof response.response === "string") {
                    newState = {
                        ...state,
                        messages: [response.response]
                    }
                } else {
                    newState = {
                        ...state,
                        messages: response.response.map(mes => mes.message)
                    }
                }
            }
            //console.log(newState)
            return newState
        })
        .addCase(iniciar_sesion.fulfilled, (state, action) => {
            const { success,response } = action.payload
            //console.log(action.payload)
            let newState = {}
            if (success) {
                const { user,token } = response
                localStorage.setItem('token',token)
                newState = {
                    ...state,
                    mail: user.mail,
                    photo: user.photo,
                    is_admin: user.is_admin,
                    is_author: user.is_admin,
                    is_company: user.is_company,
                    is_online: true,
                    messages: ['welcome!'],
                    token: token
                }
            } else {
                if (typeof response.response === "string") {
                    newState = {
                        ...state,
                        messages: [response.response]
                    }
                } else {
                    newState = {
                        ...state,
                        messages: response.response.map(mes => mes.message)
                    }
                }
            }
            //console.log(newState)
            return newState
        })
        .addCase(iniciar_sesion_con_token.fulfilled, (state, action) => {
            const { success,response,token } = action.payload
            //console.log(action.payload)
            let newState = {}
            if (success) {
                const { user,token } = response
                newState = {
                    ...state,
                    mail: user.mail,
                    photo: user.photo,
                    is_admin: user.is_admin,
                    is_author: user.is_admin,
                    is_company: user.is_company,
                    is_online: true,
                    messages: ['welcome back!'],
                    token
                }
            } else {
                newState = {
                    ...state,
                    messages: [response]
                }
            }
            //console.log(newState)
            return newState
        })
        .addCase(cerrar_sesion.fulfilled, (state, action) => {
            //console.log(action.payload)
            localStorage.removeItem('token')
            return initialState
        })

    }
)

export default authReducer