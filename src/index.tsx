import { render, Text } from "ink"

const fileToFetchValue = await fetch(
	new URL("./file-to-fetch.ts", import.meta.url)
)

console.log({ fileToFetchValue })

const Bun = () => {
	return <Text color="green">Bun `fetch` bug repro</Text>
}

render(<Bun />, {
	patchConsole: false
})
