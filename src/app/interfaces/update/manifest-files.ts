export interface ManifestFile {
    filename: string,
    version: string
}

export interface ManifestFiles {
    [key: string]: ManifestFile;
}