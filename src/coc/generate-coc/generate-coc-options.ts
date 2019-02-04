import {Contributor} from "../../contributor/contributor";
import prettier from "prettier";
import {ScaffoldConfig} from "../../config/scaffold-config";

export interface GenerateCocOptions {
	prettier: typeof prettier;
	config: ScaffoldConfig;
	contributors: Contributor[];
}