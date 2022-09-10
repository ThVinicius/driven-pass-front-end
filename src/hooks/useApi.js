import { useState, useRef } from 'react'
import axios from 'axios'
import { useGlobal } from '../context/globalContext'
import API_URL from '../config/api'

function useApi() {
  const { global } = useGlobal()
  const [seeking, setSeeking] = useState(false)
  const loading = useRef(false)

  function fetch(requests, submitToken, sucess, fail, navigate) {
    if (loading.current === true) return

    setSeeking(true)

    loading.current = true

    const headers = submitToken
      ? {
          Authorization: `Bearer ${global.token}`
        }
      : null

    const promises = []

    for (const request of requests) {
      const config = { baseURL: API_URL, headers, ...request }

      const promise = axios.request(config)

      promises.push(promise)
    }

    Promise.all(promises)
      .then(res => {
        sucess({ res, setSeeking, global, navigate })
      })
      .catch(res =>
        fail !== null
          ? fail({ res: res.response, setSeeking, navigate })
          : setSeeking(false)
      )
      .finally(() => {
        loading.current = false
      })
  }

  return [seeking, fetch]
}

export default useApi
