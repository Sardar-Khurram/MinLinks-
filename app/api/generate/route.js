import clientPromise from "@/lib/mongodb"

export async function POST(request) {

    const body = await request.json();

    const client = await clientPromise;
    const db = client.db('minlinks');
    const collection = db.collection('url');

    const doc = await collection.findOne({shortUrl: body.shortUrl})
    if(doc){
        return Response.json({ success:'flase', error:'true', message: 'URL Already Exists' })
    }

    const result = await collection.insertOne({
        url: body.url,
        shortUrl: body.shortUrl,
    })
    return Response.json({ success:'true', error:'false', message: 'Short URL generated successfully' })
  }