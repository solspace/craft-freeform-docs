interface VerticalStepWithLabelProps {
  steps: string[];
}

const VerticalStepWithLabel: React.FC<VerticalStepWithLabelProps> = ({
  steps,
}) => {
  return (
    <div className="flex flex-col">
      {steps.map((step, index) => (
        <div className="flex">
          <div className="flex flex-col items-center mr-6">
            <div>
              <div className="flex items-center justify-center w-8 h-8 text-xs font-medium border rounded-full bg-orange-700 ">
                {index + 1}
              </div>
            </div>
            <div className="w-px min-h-12 h-full bg-gray-300" />
          </div>
          <div className="flex flex-col">
            <p
              dangerouslySetInnerHTML={{ __html: step }}
              className="text-sm text-gray-200 mb-0 pb-6"
            />
          </div>
        </div>
      ))}
      <div className="flex">
        <div className="flex flex-col md:items-center mr-6">
          <div>
            <div className="flex items-center justify-center py-2 px-3 text-xs font-medium border rounded-sm bg-orange-700 ">
              Finished
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { VerticalStepWithLabel };
