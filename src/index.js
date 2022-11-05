import * as strtok3 from '@caoer/strtok3';
import {fileTypeFromTokenizer} from './core.d.ts';

export async function fileTypeFromFile(path) {
	const tokenizer = await strtok3.fromFile(path);
	try {
		return await fileTypeFromTokenizer(tokenizer);
	} finally {
		await tokenizer.close();
	}
}

export * from './core.d.ts';
