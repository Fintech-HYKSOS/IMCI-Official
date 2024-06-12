import { Dialog, Transition } from '@headlessui/react'
import { useState } from 'react'
import { types_offres } from '../../constants/type-offres'

const listOptionsInModal = () => {
    return (
        types_offres?.map((offre, key) => {
            return (
                <div className='mb-3' key={key}>
                    <input type="radio" name="OptionsImmobiliers" id="" />
                    <label for="checkbox" className="ml-2 text-sm/6 text-white">{offre.name}</label>
                </div>
            )
        }))
}
export default function Modal() {
    let [isOpen, setIsOpen] = useState(false)

    function open() {
        setIsOpen(true)
    }

    function close() {
        setIsOpen(false)
    }

    return (
        <>
            <div onClick={open} className='flex justify-center div-sticky-custom mb-5'>
                <button className='button-sidebar-custom p-4'>Cliquer pour filtrer les propriétés</button>
            </div>
            {/* <Button
                onClick={open}
                className="rounded-md bg-black/20 py-2 px-4 text-sm font-medium text-white focus:outline-none data-[hover]:bg-black/30 data-[focus]:outline-1 data-[focus]:outline-white"
            >
                Open dialog
            </Button> */}

            <Transition appear show={isOpen}>
                <Dialog as="div" className="relative z-10 focus:outline-none" onClose={close}>
                    <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4">
                            <Transition.Child
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 transform-[scale(95%)]"
                                enterTo="opacity-100 transform-[scale(100%)]"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 transform-[scale(100%)]"
                                leaveTo="opacity-0 transform-[scale(95%)]"
                            >
                                <Dialog.Panel className="w-full max-w-md rounded-xl bg-black p-6 backdrop-blur-2xl">
                                    <div className='flex'>
                                        <div>
                                            <Dialog.Title as="h3" className="text-base/7 font-medium text-white">
                                                Formulaire de Filtrage
                                            </Dialog.Title>
                                            <form action="">
                                                <p className="mt-2 text-sm/6 text-white/50">
                                                    <div className='mb-3'>
                                                        <input type="radio" name="OptionsImmobiliers" id="" />
                                                        <label for="checkbox" className="ml-2 text-sm/6 text-white mb-2">Toutes les options</label>
                                                    </div>
                                                    {listOptionsInModal()}
                                                </p>
                                            </form>
                                        </div>


                                        <div>
                                            <Dialog.Title as="h3" className="text-base/7 font-medium text-white text-center mt-2">
                                                Tranche de budgets
                                            </Dialog.Title>
                                            <div className="mt-2 text-sm/6 text-white/50 h-4/6 flex items-center">
                                                <div className='mx-5'>
                                                    <div className='mb-3'>
                                                        <label for="name" className="block font-bold text-gray-600">Prix minimum</label>
                                                        <input type="number" id="name" name="name" placeholder="Prix minimum" className="border border-gray-300 shadow p-3 w-full rounded mb-" />
                                                    </div>
                                                    <div>
                                                        <label for="name" className="block font-bold text-gray-600">Prix maximal</label>
                                                        <input type="number" id="name" name="name" placeholder="Prix maximal" className="border border-gray-300 shadow p-3 w-full rounded mb-" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mt-4 w-full text-center">
                                        <button
                                            className="inline-flex items-center gap-2 rounded-md bg-orange-700 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[open]:bg-gray-700 data-[focus]:outline-1 data-[focus]:outline-white"
                                            onClick={close}
                                        >
                                            Cliquer pour filtrer
                                        </button>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}