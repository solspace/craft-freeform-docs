import React from 'react';

interface StepMarkdownProps {
  stepTitle?: string;
  stepNumber?: number;
  children?: React.ReactNode;
}

const StepMarkdown: React.FC<StepMarkdownProps> = ({
  children,
  stepNumber,
  stepTitle,
}) => {
  return (
    <div className="flex">
      {stepNumber && (
        <div className="flex flex-col items-center mr-6">
          <div className="flex items-center justify-center w-8 h-8 text-xs font-medium border rounded-full bg-orange-700">
            {stepNumber}
          </div>
          <div className="w-px min-h-12 h-full bg-gray-300" />
        </div>
      )}
      <div className="flex flex-col max-w-[1045px]">
        {stepTitle && <h4>{stepTitle}</h4>}
        {children}
      </div>
    </div>
  );
};

const VerticalStepWrapper = ({ children }: { children: React.ReactNode }) => {
  let stepNumber = 1;

  const childrenWithStepNumbers = React.Children.map(children, (child) => {
    if (React.isValidElement(child) && child.type === StepMarkdown) {
      const stepWithNumber = React.cloneElement(child, {
        stepNumber,
      } as unknown as Partial<StepMarkdownProps>);

      stepNumber++;
      return stepWithNumber;
    }

    return child;
  });

  return (
    <div className="flex flex-col">
      {childrenWithStepNumbers}
      <div className="flex">
        <div className="flex flex-col md:items-center mr-6">
          <div className="flex items-center justify-center py-2 px-3 text-xs font-medium border rounded-sm bg-orange-700">
            Finished
          </div>
        </div>
      </div>
    </div>
  );
};

export { VerticalStepWrapper, StepMarkdown };
