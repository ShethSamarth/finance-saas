"use client"

import { Upload } from "lucide-react"
import { useCSVReader } from "react-papaparse"

import { Button } from "@/components/ui/button"

type UploadButtonProps = {
  onUpload: (result: any) => void
}

export const UploadButton = ({ onUpload }: UploadButtonProps) => {
  const { CSVReader } = useCSVReader()

  return (
    <CSVReader onUploadAccepted={onUpload}>
      {({ getRootProps }: any) => (
        <Button size="sm" className="w-full md:w-auto" {...getRootProps()}>
          <Upload className="size-4 mr-2" />
          Import CSV
        </Button>
      )}
    </CSVReader>
  )
}
