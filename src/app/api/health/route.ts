import { NextResponse } from 'next/server';

export function GET() {
  return NextResponse.json({ message: 'ok' }, { status: 200, headers: { 'Content-Type': 'application/json' } });
}
