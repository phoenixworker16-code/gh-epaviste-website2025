import { NextRequest, NextResponse } from 'next/server'
import prisma from '@/lib/prisma'

export async function PATCH(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { statut } = await request.json()
    
    const updatedDemande = await prisma.demande.update({
      where: { id: parseInt(params.id) },
      data: { statut }
    })
    
    return NextResponse.json(updatedDemande)
  } catch (error) {
    console.error('Erreur lors de la mise à jour:', error)
    return NextResponse.json(
      { error: 'Erreur lors de la mise à jour' },
      { status: 500 }
    )
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    await prisma.demande.delete({
      where: { id: parseInt(params.id) }
    })
    
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Erreur lors de la suppression:', error)
    return NextResponse.json(
      { error: 'Erreur lors de la suppression' },
      { status: 500 }
    )
  }
}