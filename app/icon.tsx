import { ImageResponse } from 'next/og'
import { readFileSync } from 'fs'
import { join } from 'path'

export const size = { width: 256, height: 256 }
export const contentType = 'image/png'

export default function Icon() {
  const fontPath = join(process.cwd(), 'public/fonts/Bangers-Regular.ttf')
  const fontData = readFileSync(fontPath)

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#050a07',
          borderRadius: '56px',
          border: '6px solid #34d399',
          overflow: 'hidden',
          position: 'relative',
          boxShadow: 'inset 0 0 35px rgba(52, 211, 153, 0.45)',
        }}
      >
        {/* Halo de portail interdimensionnel en arrière-plan */}
        <div
          style={{
            position: 'absolute',
            width: '210px',
            height: '210px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(52, 211, 153, 0.5) 0%, rgba(16, 185, 129, 0.18) 50%, transparent 75%)',
            border: '2px dashed rgba(52, 211, 153, 0.4)',
          }}
        />

        {/* Anneau intérieur fin */}
        <div
          style={{
            position: 'absolute',
            width: '145px',
            height: '145px',
            borderRadius: '50%',
            border: '1.5px solid rgba(110, 231, 183, 0.3)',
          }}
        />

        {/* Éclats/Étoiles d'énergie dans les coins */}
        <div
          style={{
            position: 'absolute',
            top: '22px',
            left: '24px',
            width: '8px',
            height: '8px',
            borderRadius: '50%',
            backgroundColor: '#a7f3d0',
            boxShadow: '0 0 12px #34d399',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: '22px',
            right: '24px',
            width: '8px',
            height: '8px',
            borderRadius: '50%',
            backgroundColor: '#a7f3d0',
            boxShadow: '0 0 12px #34d399',
          }}
        />

        {/* Le "M" en relief 3D comics avec lueur verte */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginLeft: '8px',
            marginTop: '2px',
            zIndex: 10,
          }}
        >
          <span
            style={{
              fontFamily: 'Bangers',
              fontSize: '175px',
              color: '#ffffff',
              lineHeight: 1,
              letterSpacing: '0px',
              textShadow:
                '0 0 14px #34d399, 0 0 32px rgba(52, 211, 153, 0.85), 2px 4px 0px #047857, 4px 7px 0px #022c22, 6px 10px 14px rgba(0, 0, 0, 0.95)',
            }}
          >
            M
          </span>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: 'Bangers',
          data: fontData,
          style: 'normal',
          weight: 400,
        },
      ],
    }
  )
}
