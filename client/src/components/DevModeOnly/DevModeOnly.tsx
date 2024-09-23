import { Card } from 'react-bootstrap'
import './DevModeOnly.css'
import { PropsWithChildren } from 'react'

export default function DevModeOnly({ children }: PropsWithChildren) {
  return (
    <>
      {
        (process.env.NODE_ENV === 'development') &&
        <Card className='border-3 border-danger-subtle my-4'>
          <Card.Header className='bg-danger-subtle border'>Visible in DEVELOPMENT MODE only</Card.Header>
          <Card.Body>
            {children}
          </Card.Body>
        </Card>
      }
    </>
  )
}