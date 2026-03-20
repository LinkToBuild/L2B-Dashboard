import React from 'react'
import {AgentScreen} from '@/features/agentsprofile/screen/AgentScreen'

export default function page ()  {
  return (
    <div className='px-8 py-5    min-h-screen'>
        <AgentScreen userLevel="L2" userId="ADC1223"></AgentScreen>
    </div>
  )
}

