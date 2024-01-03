import { BuildDto } from "../models/dtos/build.dto";

export function getBuild(): BuildDto {
    const build: BuildDto = {
        version: process.env.VERSION || '1.0.0',
        build: process.env.BUILD || '23123001'
    }
    return build;
}