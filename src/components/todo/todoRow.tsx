import CheckIcon from '../icons/check.icon';
import DeleteIcon from '../icons/delete.icon';
import EditIcon from '../icons/edit.icon';
import { TodoVariants } from '../../constants/todoVariant.constants';
import { TodoStatusVariants } from '../../interfaces/todo.interfaces';
import { patchRequest } from '../../services/request.services';
import { Endpoints } from '../../constants/endpoint.constants';
import { usePopup } from '../../hooks/usePopup';
import { RegularPopupVariants } from '../../constants/componentVariants.constants';
import React, { useState } from 'react';
import classNames from 'classnames';

export default function TodoRow({
  text,
  status,
  handleDelete,
  id,
}: {
  text: string;
  status: TodoStatusVariants;
  id: number;
  handleDelete: () => void;
}) {
  const [content, setContent] = useState(text);
  const [statusState, setStatusState] = useState(status);
  const [isEditable, setIsEditable] = useState(false);
  const { providePopupSettings } = usePopup();

  const statusName = TodoVariants?.[statusState];

  const rowStyles = classNames({
    'flex flex-row items-center px-5 py-4 rounded-sm shadow-sm': true,
    'border-b border-green-500': statusState === TodoStatusVariants.done,
    'border-b border-purple-500':
      statusState === TodoStatusVariants.in_progress,
  });

  const progressStyles = classNames({
    'text-xl': true,
    'text-green-500': statusState === TodoStatusVariants.done,
    'text-purple-500': statusState === TodoStatusVariants.in_progress,
  });

  const handleEnterKey = (e: any) => {
    if (e.key === 'Enter') {
      setIsEditable(false);
      patchRequest(Endpoints.todo(), { id, text: content }).then(res => {
        const { data, status: responseStatus, message } = res.data;
        const isResponseSuccess = responseStatus === 'success';

        if (isResponseSuccess) {
          setContent(data.text);
        }

        providePopupSettings({
          text: message,
          popupVariant: isResponseSuccess
            ? RegularPopupVariants.SUCCESS
            : RegularPopupVariants.ERROR,
        });
      });
    }
  };

  const handleChange = (e: any) => {
    const inputValue = e.target.value;
    setContent(inputValue);
  };

  const toggleEdit = () => {
    setIsEditable(prev => !prev);
  };

  const handleStatus = () => {
    patchRequest(Endpoints.todo(), { id, statusId: 1 }).then(res => {
      const { data, status: responseStatus, message } = res.data;
      const isResponseSuccess = responseStatus === 'success';

      if (isResponseSuccess) {
        setStatusState(data.status.name);
      }

      providePopupSettings({
        text: message,
        popupVariant: isResponseSuccess
          ? RegularPopupVariants.SUCCESS
          : RegularPopupVariants.ERROR,
      });
    });
  };

  return (
    <div className="my-4">
      <div className={rowStyles}>
        <div className="w-1/3 overflow-hidden">
          {isEditable ? (
            <input
              className="px-4 py-2 text-purple-500 border-b focus:outline-none border-b-purple-500"
              type="text"
              onChange={handleChange}
              value={content}
              onKeyDown={handleEnterKey}
            />
          ) : (
            <span className="px-4 py-2 text-purple-500 border-b-0">
              {content}
            </span>
          )}
        </div>

        <div className="flex justify-end w-1/3">
          <p className={progressStyles}>{statusName}</p>
        </div>

        <div className="flex flex-row justify-end w-1/3 flex-end">
          <button onClick={toggleEdit}>
            <EditIcon />
          </button>
          <button onClick={handleDelete}>
            <DeleteIcon />
          </button>
          <button onClick={handleStatus}>
            <CheckIcon />
          </button>
        </div>
      </div>
    </div>
  );
}