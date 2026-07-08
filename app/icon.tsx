import { ImageResponse } from 'next/og'
import { readFileSync } from 'fs'
import { join } from 'path'

export const size = { width: 256, height: 256 }
export const contentType = 'image/png'

export default function Icon() {
  const avatarPath = join(process.cwd(), 'public/images/avatar.png')
  const avatarBuffer = readFileSync(avatarPath)
  const avatarBase64 = `data:image/png;base64,${avatarBuffer.toString('base64')}`

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '50%',
          overflow: 'hidden',
          backgroundColor: 'transparent',
        }}
      >
        <img 
          src={avatarBase64} 
          alt="Avatar" 
          style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%' }} 
        />
      </div>
    ),
    { ...size }
  )
}
