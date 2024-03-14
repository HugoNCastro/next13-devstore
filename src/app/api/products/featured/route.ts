import { NextResponse } from "next/server";
import data from '../data.json'

export async function GET(){
  await new Promise((resolve) => setTimeout(resolve, 2000))

  const featuredProducts = data.products.filter(product => product.featured)

  return NextResponse.json (featuredProducts)
} 