'use client'
// help.syncfusion.com/document-processing/pdf/pdf-viewer/react/getting-started

import {
  Annotation,
  AnnotationType,
  BookmarkView,
  FormDesigner,
  FormFields,
  Inject,
  InteractionMode,
  LinkAnnotation,
  Magnification,
  Navigation,
  PdfViewerComponent,
  Print,
  TextSearch,
  TextSelection,
  ThumbnailView,
  Toolbar,
} from '@syncfusion/ej2-react-pdfviewer'

registerLicense(
  'Ngo9BigBOggjHTQxAR8/V1JFaF5cXGRCf1JpRGFGfV5ycUVPal5QTnRfUj0eQnxTdEBiWX5dcnVXQGBVUkJyV0leYg=='
)

import { useEffect, useRef, useState } from 'react'

import {
  ArchiveIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
  BlendingModeIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  CursorArrowIcon,
  DownloadIcon,
  HandIcon,
  Pencil1Icon,
  ReaderIcon,
  TrashIcon,
  ZoomInIcon,
  ZoomOutIcon,
} from '@radix-ui/react-icons'
import { IconButton, Select } from '@radix-ui/themes'
import { usePdfStore } from '@store/pdfStore'
import { registerLicense } from '@syncfusion/ej2-base'

import '@syncfusion/ej2-base/styles/material.css'
import '@syncfusion/ej2-buttons/styles/material.css'
import '@syncfusion/ej2-dropdowns/styles/material.css'
import '@syncfusion/ej2-inputs/styles/material.css'
import '@syncfusion/ej2-navigations/styles/material.css'
import '@syncfusion/ej2-popups/styles/material.css'
import '@syncfusion/ej2-splitbuttons/styles/material.css'
import '@syncfusion/ej2-pdfviewer/styles/material.css'
import '@syncfusion/ej2-lists/styles/material.css'
import '@syncfusion/ej2-notifications/styles/material.css'
import '@syncfusion/ej2-react-pdfviewer/styles/material.css'
import '@styles/syncfusion_pdfviewer.css'

export const PDFViewer = () => {
  const viewer = useRef<PdfViewerComponent>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)
  const pdfInstance = viewer.current

  const [totalPage, setTotalPage] = useState<number>(0)
  const [currentPage, setCurrentPage] = useState<number>(0)
  const [zoomPercentage, setZoomPercentage] = useState<string>('100')
  const [interactionMode, setInteractionMode] = useState<InteractionMode>('TextSelection')
  const [annotationMode, setAnnotationMode] = useState<AnnotationType | null>(null)

  const { file, setFile } = usePdfStore()

  const handleOpenFileClick = () => {
    fileInputRef.current?.click()
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]

    if (!file) return

    setFile(file)
  }

  useEffect(() => {
    if (!file || !viewer.current) return

    try {
      const blobUrl = URL.createObjectURL(file)
      const pdfViewer: PdfViewerComponent = viewer.current

      pdfViewer.load(blobUrl, file.name)
      setCurrentPage(1)
      setTimeout(() => setTotalPage(pdfViewer.pageCount || 0), 100)
    } catch (_err) {
      //
    }
  }, [file])

  const onZoomChange = (e: string) => {
    if (e === 'fit_page') {
      pdfInstance?.magnificationModule.fitToPage()
      setZoomPercentage('fit_page')
    } else if (e === 'fit_width') {
      pdfInstance?.magnificationModule.fitToWidth()
      setZoomPercentage('fit_width')
    } else {
      pdfInstance?.magnificationModule.zoomTo(parseInt(e || '100'))
      setTimeout(() => setZoomPercentage((pdfInstance?.zoomPercentage || 100)?.toString()))
    }
  }

  const zoomIn = () => {
    pdfInstance?.magnificationModule.zoomIn()
    setTimeout(() => setZoomPercentage((pdfInstance?.zoomPercentage || 100)?.toString()))
  }

  const zoomOut = () => {
    pdfInstance?.magnificationModule.zoomOut()
    setTimeout(() => setZoomPercentage((pdfInstance?.zoomPercentage || 100)?.toString()))
  }

  const goToPrev = () => {
    pdfInstance?.navigationModule?.goToPreviousPage()
    setTimeout(() => setCurrentPage(pdfInstance?.currentPageNumber || 1))
  }

  const goToNext = () => {
    pdfInstance?.navigationModule?.goToNextPage()
    setTimeout(() => setCurrentPage(pdfInstance?.currentPageNumber || 1))
  }

  const drawMode = () => {
    if (annotationMode === 'Ink') {
      setAnnotationMode(null)
      pdfInstance?.annotationModule.setAnnotationMode('None')
    } else {
      setAnnotationMode('Ink')
      pdfInstance?.annotationModule.setAnnotationMode('Ink')
    }
  }

  const highlight = () => {
    if (annotationMode === 'Highlight') {
      setAnnotationMode(null)
      pdfInstance?.annotationModule.setAnnotationMode('None')
    } else {
      setAnnotationMode('Highlight')
      pdfInstance?.annotationModule.setAnnotationMode('Highlight')
    }
  }

  const deleteAnnotation = () => {
    setAnnotationMode(null)
    pdfInstance?.annotationModule.deleteAnnotation()
  }

  return (
    <div className=''>
      <div className='flex flex-wrap items-center gap-2 p-3 rounded'>
        <IconButton onClick={handleOpenFileClick}>
          <ArchiveIcon />
        </IconButton>
        <div className='flex items-center mx-[20px] text-[11pt]'>
          <div className='me-3'>
            Page {currentPage} of {totalPage}
          </div>
          <div className='flex gap-2'>
            <IconButton size='1' variant='surface' color='gray' onClick={goToPrev}>
              <ChevronLeftIcon />
            </IconButton>
            <IconButton size='1' variant='surface' color='gray' onClick={goToNext}>
              <ChevronRightIcon />
            </IconButton>
          </div>
        </div>
        <div className='flex items-center mx-[20px] gap-3'>
          <IconButton variant='ghost' color='gray' radius='full' onClick={zoomOut}>
            <ZoomOutIcon width='25' height='25' />
          </IconButton>
          <Select.Root
            size='2'
            defaultValue='100'
            value={`${zoomPercentage}`}
            onValueChange={onZoomChange}>
            <Select.Trigger />
            <Select.Content>
              <Select.Item value='10'>10%</Select.Item>
              <Select.Item value='25'>25%</Select.Item>
              <Select.Item value='50'>50%</Select.Item>
              <Select.Item value='75'>75%</Select.Item>
              <Select.Item value='100'>100%</Select.Item>
              <Select.Item value='125'>125%</Select.Item>
              <Select.Item value='150'>150%</Select.Item>
              <Select.Item value='200'>200%</Select.Item>
              <Select.Item value='400'>400%</Select.Item>
              <Select.Item value='fit_page'>Fit Page</Select.Item>
              <Select.Item value='fit_width'>Fit Width</Select.Item>
            </Select.Content>
          </Select.Root>
          <IconButton variant='ghost' color='gray' radius='full' onClick={zoomIn}>
            <ZoomInIcon width='25' height='25' />
          </IconButton>
        </div>
        <div className='flex items-center mx-[20px] gap-2'>
          <IconButton
            variant={interactionMode === 'Pan' ? 'solid' : 'outline'}
            size='2'
            onClick={() => {
              setInteractionMode('Pan')
              setAnnotationMode(null)
            }}>
            <HandIcon width='16' height='16' />
          </IconButton>
          <IconButton
            variant={interactionMode === 'TextSelection' ? 'solid' : 'outline'}
            size='2'
            onClick={() => {
              setInteractionMode('TextSelection')
              setAnnotationMode(null)
            }}>
            <CursorArrowIcon width='16' height='16' />
          </IconButton>
          <IconButton
            variant={annotationMode === 'Ink' ? 'solid' : 'outline'}
            size='2'
            onClick={drawMode}>
            <Pencil1Icon width='16' height='16' />
          </IconButton>
          <IconButton
            variant={annotationMode === 'Highlight' ? 'solid' : 'outline'}
            size='2'
            onClick={highlight}>
            <BlendingModeIcon width='16' height='16' />
          </IconButton>
          <IconButton variant='surface' color='gray' size='2' onClick={deleteAnnotation}>
            <TrashIcon width='22' height='22' />
          </IconButton>
        </div>
        <div className='flex items-center ms-auto me-3 gap-1'>
          <IconButton
            size='1'
            variant='surface'
            onClick={() => {
              try {
                pdfInstance?.annotationModule.undo()
              } catch {
                //
              }
            }}>
            <ArrowLeftIcon width='15' height='15' />
          </IconButton>
          <IconButton
            size='1'
            variant='surface'
            onClick={() => {
              try {
                pdfInstance?.annotationModule.redo()
              } catch {
                //
              }
            }}>
            <ArrowRightIcon width='15' height='15' />
          </IconButton>
        </div>
        <div className='flex items-center gap-2'>
          <IconButton variant='soft' onClick={() => pdfInstance?.printModule?.print()}>
            <ReaderIcon width='20' height='20' />
          </IconButton>
          <IconButton variant='soft' onClick={() => pdfInstance?.download()}>
            <DownloadIcon width='20' height='20' />
          </IconButton>
        </div>
      </div>
      <input
        type='file'
        ref={fileInputRef}
        className='hidden'
        accept='application/pdf'
        onChange={handleFileChange}
      />
      <PdfViewerComponent
        id='pdfViewer'
        ref={(scope: PdfViewerComponent | null) => {
          viewer.current = scope
        }}
        // documentPath='https://pdfobject.com/pdf/sample.pdf'
        // resourceUrl='https://document.syncfusion.com/web-services/pdf-viewer/api/pdfviewer'
        // resourceUrl={`${window.location.origin}/ej2-pdfviewer-lib`}
        resourceUrl='https://cdn.syncfusion.com/ej2/26.2.11/dist/ej2-pdfviewer-lib'
        style={{ height: '65vh', width: '100%' }}
        interactionMode={interactionMode}
        enableToolbar={false}
        enableNavigation={true}
        enableAnnotation={true}
        enableTextSelection={true}
        enableMagnification={true}
        enableTextSearch={true}
        enableBookmark={true}
        enableThumbnail={true}
        enableFormFields={true}
        enablePinchZoom
        documentLoad={() => {
          setTotalPage(pdfInstance?.pageCount || 0)
        }}
        enableFormDesigner={true}>
        <Inject
          services={[
            Toolbar,
            Magnification,
            Navigation,
            Annotation,
            LinkAnnotation,
            BookmarkView,
            ThumbnailView,
            Print,
            TextSelection,
            TextSearch,
            FormFields,
            FormDesigner,
          ]}
        />
      </PdfViewerComponent>
    </div>
  )
}
