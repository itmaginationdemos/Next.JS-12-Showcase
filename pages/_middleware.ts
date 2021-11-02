import type { NextRequest } from 'next/server';


// **Not all** functions are available from the Edge Runtime 
// For a list of available APIs, see https://nextjs.org/docs/api-reference/edge-runtime
export function middleware(req: NextRequest) {
    // just two of the ways you can set custom headers.
    // There are more, as well
    // https://developer.mozilla.org/en-US/docs/Web/API/Headers
    const headers = new Headers({ 'x-foo': 'bar' });
    headers.set('x-fizz', 'buzz');

    // We can print to the console from here as well.
    console.time(`Lorem Ipsum ${(Math.random()+1) * 1000}`);

    const country = req.geo.country;
    const city = req.geo.city;
    // sorry San Marino; but congrats on scoring against Poland!
    const BLOCKED_COUNTRY = "SM"

    if (country === BLOCKED_COUNTRY) {
        return new Response('Sorry, San Marino', { status: 451 })
    }
    
}