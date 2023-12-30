import { BuildDto } from "../models/dtos/build.dto";

export function getBuild(): BuildDto {
    const build: BuildDto = {
        version: '1.0.0',
        build: '23123001'
    }
    return build;
}